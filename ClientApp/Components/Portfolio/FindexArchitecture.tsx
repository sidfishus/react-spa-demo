import { Table } from "semantic-ui-react";
import { Code, SegmentDemo, SegmentSubSection } from "../Presentation.tsx";
import { MermaidDiagram } from "./MermaidDiagram.tsx";
import "./FindexArchitecture.scss";

const systemOverviewDiagram = `
flowchart TB
    subgraph Client["Browser — Svelte 5 PWA"]
        UI["UI pages<br/><i>AppNew.svelte, pages/*</i>"]
        SW["Service Worker<br/><i>sw.ts — offline precache</i>"]
        LW["localSqlDb Web Worker<br/><i>sqlite-wasm + Comlink</i>"]
        OPFS[("OPFS SQLite<br/>private catches, blobs")]
        UI --> LW
        LW --> OPFS
        UI --- SW
    end

    subgraph External["External services"]
        GAuth["Google OAuth"]
        GDrive["Google Drive API"]
        GCS["Google Cloud Storage"]
        FB["Facebook Graph / CAPI"]
        OSM["OpenStreetMap tiles"]
        GeoIP["MaxMind GeoLite2"]
    end

    subgraph Server["Server — fishingwebapp-api (Rust / Axum)"]
        API["HTTP API + SPA static files"]
        DBS[("6× SQLite databases")]
        FS["CatchImages filesystem"]
        API --> DBS
        API --> FS
    end

    subgraph Workers["Background workers (systemd timers)"]
        MOD["image_moderator.py<br/>every 5 min"]
        BAK["backup CLI<br/>every 30 min, 01:00–05:00 UTC"]
    end

    UI -->|"HTTPS /api/*"| API
    UI -->|"PKCE login"| GAuth
    GAuth -->|"exchange-code"| API
    LW -->|"PeriodicSync 5s"| GDrive
    LW -->|"Bearer JWT"| API
    UI --> OSM

    MOD -->|"read pending catches"| DBS
    MOD -->|"POST /api/internal/publiccatch/moderate"| API
    API --> FB
    BAK --> DBS
    BAK --> FS
    BAK --> GCS
    API -->|"enqueue pending_blob_backup"| DBS
    API -.-> GeoIP
`;

const frontendDiagram = `
flowchart LR
    subgraph Entry["Entry & shell"]
        main["main.ts"]
        app["AppNew.svelte<br/>client routing (page)"]
        util["AppUtil.svelte.ts<br/>init, auth, sync loop"]
        main --> app --> util
    end

    subgraph Pages["Feature pages"]
        catch["catch/*"]
        fishery["fishery/*"]
        forum["forum/*"]
        settings["settings/*"]
        connect["connect/*"]
    end

    subgraph Lib["Shared lib"]
        auth["auth — PKCE, token refresh"]
        config["config — VITE_APP_BASE_URL"]
        retry["retryFetch, withTokenRefreshRetry"]
        stores["stores — user, settings"]
    end

    subgraph Worker["localSqlDb worker"]
        core["core.ts — PeriodicSync"]
        syncE["syncExportProcess.ts"]
        syncI["syncImportProcess.ts"]
        share["ShareCatch.ts"]
        upload["uploadJobProcessor.ts"]
        migrate["migrations/*"]
        core --> syncE
        core --> syncI
        syncE --> upload
        syncE --> share
    end

    subgraph Local["Local storage"]
        opfs[("OPFS SQLite")]
    end

    app --> Pages
    Pages --> Lib
    util -->|"Comlink"| Worker
    Worker --> opfs
    Lib -->|"fetch /api/*"| API2["Rust API"]
    share -->|"POST catchimages, publiccatch"| API2
    syncE --> GDrive2["Google Drive"]
    syncI --> GDrive2
`;

const backendDiagram = `
flowchart TB
    subgraph HTTP["Axum router — setup_router.rs"]
        MW["Middleware stack<br/>CORS · security headers · GeoIP · JWT · internal key"]
        RAuth["/api/auth/google/*"]
        RAuthFB["/api/auth/facebook/*"]
        RStatic["/api/staticdata"]
        RPC["/api/publiccatch/*"]
        RImg["/api/catchimages/*"]
        RForum["/api/forum/*"]
        RUser["/api/user/*"]
        RInteg["/api/integrations/*"]
        RLog["/api/log"]
        RInternal["/api/internal/*"]
        RSPA["/* — SPA + SEO fishery pages"]
        MW --> RAuth & RAuthFB & RStatic & RPC & RImg & RForum & RUser & RInteg & RLog & RInternal & RSPA
    end

    subgraph Layers["Application layers"]
        handlers["handlers/*.rs"]
        repos["repositories/*.rs"]
        services["services/*.rs"]
        handlers --> repos
        handlers --> services
    end

    subgraph Services["Key services"]
        jwt["jwt · refresh_session · encryption"]
        cache["static_data_cache"]
        fbSvc["facebook_graph · facebook_page · facebook_capi"]
        modSvc["public_catch_moderation · bait_caption · image_badge"]
    end

    subgraph Data["Persistence"]
        userDB[("user.db")]
        staticDB[("staticdata.db")]
        catchDB[("publiccatch.db")]
        bgDB[("backgroundtasks.db")]
        forumDB[("forum.db")]
        integDB[("integrations.db")]
        imgFS["Data/CatchImages/"]
    end

    RAuth & RAuthFB & RStatic & RPC & RForum & RUser & RInteg & RInternal --> handlers
    RImg --> handlers
    handlers --> Services
    repos --> userDB & staticDB & catchDB & bgDB & forumDB & integDB
    handlers --> imgFS
`;

const backgroundDiagram = `
flowchart TB
    subgraph Triggers["Triggers"]
        upload["Image upload<br/>POST /api/catchimages/upload"]
        timer5["systemd: image-moderation.timer<br/>every 5 min"]
        timer30["systemd: backup.timer<br/>01:00–05:00 UTC, every 30 min"]
        sync5["Browser: PeriodicSync<br/>every 5 s"]
    end

    subgraph InProcess["In-process (API server)"]
        BW["BatchWriter<br/>batched SQLite writes"]
        enqueue["background_tasks repo<br/>INSERT pending_blob_backup"]
        upload --> enqueue
    end

    subgraph ModWorker["image_moderation.service"]
        modPy["image_moderator.py<br/>NudeNet classifier"]
        modPy -->|"status=200 pending"| catchRead[("publiccatch.db")]
        modPy -->|"POST moderate"| internalAPI["/api/internal/publiccatch/moderate"]
        internalAPI --> fbPost["Facebook auto-post on approve"]
    end

    subgraph BackupWorker["backup.service"]
        backupBin["backup CLI (Rust)<br/>--features gcs"]
        backupBin --> allDBs["All SQLite DBs → GCS"]
        backupBin --> blobQ["Process pending_blob_backup"]
        blobQ --> imgZip["Zip full+thumb images → GCS"]
    end

    subgraph ClientSync["Client sync (writer device)"]
        sync5 --> driveExport["Export DB zip → Google Drive"]
        sync5 --> shareFlow["ShareCatch → API"]
        sync5 --> driveImport["Import from Drive (readers)"]
    end

    timer5 --> modPy
    timer30 --> backupBin
    enqueue --> blobQ
`;

const publicCatchShareDiagram = `
sequenceDiagram
    actor User
    participant UI as Svelte UI
    participant Worker as localSqlDb worker
    participant API as Rust API
    participant FS as CatchImages FS
    participant Mod as image_moderator.py
    participant FB as Facebook

    User->>UI: Mark catch for public share
    Note over Worker: PeriodicSync (writer, 5s)
    Worker->>API: POST /api/catchimages/upload
    API->>FS: Store full + thumb
    API->>API: Enqueue pending_blob_backup
    Worker->>API: POST /api/publiccatch
    API->>API: status = pending moderation

    loop every 5 min
        Mod->>API: GET pending catches + classify
        Mod->>API: POST /api/internal/publiccatch/moderate
    end

    API->>FB: Auto-post on approval
    User->>UI: View in public feed
    UI->>API: GET /api/publiccatch/*
`;

const privateDataSyncDiagram = `
sequenceDiagram
    participant Writer as Writer device
    participant Drive as Google Drive
    participant Reader as Reader device
    participant OPFS_W as OPFS SQLite (writer)
    participant OPFS_R as OPFS SQLite (reader)

    Writer->>OPFS_W: Local CRUD (all private data)
    loop every 5s
        Writer->>OPFS_W: Export incremental DB zip
        Writer->>Drive: Upload blob (writer lock)
    end
    loop every 5s
        Reader->>Drive: Check for new blobs
        Reader->>OPFS_R: Import / merge
    end
    Note over Writer,Reader: Server never stores private catch data
`;

const authFlowDiagram = `
sequenceDiagram
    actor User
    participant UI as Svelte UI
    participant Google as Google OAuth
    participant API as Rust API
    participant Worker as localSqlDb worker

    User->>UI: Sign in
    UI->>UI: Generate PKCE verifier / challenge
    UI->>Google: Authorize (PKCE)
    Google->>UI: Authorization code
    UI->>API: POST /api/auth/google/exchange-code
    API->>API: Validate code, issue JWT + refresh cookie
    API->>UI: Access token (JWT)
    Note over UI,API: HTTP-only refresh cookie for session renewal
    UI->>API: API calls with Bearer JWT
    Worker->>API: API calls with Bearer JWT
    Note over UI,API: withTokenRefreshRetry on 401
`;

export const FindexArchitecture = (): JSX.Element => {
    return (
        <SegmentDemo heading="Architecture">
            <SegmentSubSection>
                <p>
                    The diagrams and descriptions below were initially mapped out with significant AI
                    assistance, then reviewed and edited by me.
                </p>

                <ul className="findex-architecture-toc">
                    <li><a href="#findex-overview">Overview</a></li>
                    <li><a href="#findex-frontend">Frontend</a></li>
                    <li><a href="#findex-backend">Backend</a></li>
                    <li><a href="#findex-background">Background</a></li>
                    <li><a href="#findex-auth">Authentication</a></li>
                    <li><a href="#findex-flows">Data flows</a></li>
                </ul>

                <SegmentSubSection heading="System overview" nested={1}>
                    <div id="findex-overview" />
                    <p>
                        Single-region deployment: one Rust process serves the API and production SPA.
                        Private catch data stays on the client (OPFS + Google Drive sync).
                        Public/social features hit the server.
                    </p>
                    <MermaidDiagram chart={systemOverviewDiagram} />
                </SegmentSubSection>

                <SegmentSubSection heading="Frontend" nested={1}>
                    <div id="findex-frontend" />
                    <p>
                        Offline-first PWA. All private CRUD runs in a Web Worker against local SQLite.
                        The main thread talks to the API for auth, static data, and public-catch sharing.
                    </p>
                    <MermaidDiagram chart={frontendDiagram} />

                    <h4>Frontend background loops (in-browser)</h4>
                    <Table compact>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Loop</Table.HeaderCell>
                                <Table.HeaderCell>Interval</Table.HeaderCell>
                                <Table.HeaderCell>Location</Table.HeaderCell>
                                <Table.HeaderCell>Purpose</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>PeriodicSync</Table.Cell>
                                <Table.Cell>5 s</Table.Cell>
                                <Table.Cell>
                                    <Code inline>AppUtil.svelte.ts</Code> → <Code inline>core.ts</Code>
                                </Table.Cell>
                                <Table.Cell>Drive export (writer) or import (reader)</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Upload jobs</Table.Cell>
                                <Table.Cell>during export</Table.Cell>
                                <Table.Cell><Code inline>uploadJobProcessor.ts</Code></Table.Cell>
                                <Table.Cell>Incremental + monthly DB zip → Drive</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>ShareCatch</Table.Cell>
                                <Table.Cell>during writer sync</Table.Cell>
                                <Table.Cell><Code inline>ShareCatch.ts</Code></Table.Cell>
                                <Table.Cell>Upload images, create public catch</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Static data refresh</Table.Cell>
                                <Table.Cell>~30 min</Table.Cell>
                                <Table.Cell><Code inline>staticData.ts</Code></Table.Cell>
                                <Table.Cell>Refresh reference data from API</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Service worker</Table.Cell>
                                <Table.Cell>on install</Table.Cell>
                                <Table.Cell><Code inline>sw.ts</Code></Table.Cell>
                                <Table.Cell>Precache, SPA fallback, OSM CORP headers</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </SegmentSubSection>

                <SegmentSubSection heading="Backend" nested={1}>
                    <div id="findex-backend" />
                    <p>
                        Deployed as a monolith today, but structured for separation: routes are grouped
                        by domain and each domain has its own SQLite database. Handlers → repositories
                        → SQLite. No ORM. Writes batched via <Code inline>BatchWriter</Code>; reads use{" "}
                        <Code inline>deadpool-sqlite</Code> pools. Moving to microservices would mean
                        running multiple instances of the same API, each with a configuration that
                        exposes only the routes for its domain.
                    </p>
                    <MermaidDiagram chart={backendDiagram} />

                    <h4>SQLite databases</h4>
                    <Table compact>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Schema</Table.HeaderCell>
                                <Table.HeaderCell>File</Table.HeaderCell>
                                <Table.HeaderCell>Contents</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell><Code inline>user</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/user.db</Code></Table.Cell>
                                <Table.Cell>Users, scopes, settings, notifications</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>staticdata</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/staticdata.db</Code></Table.Cell>
                                <Table.Cell>Fisheries, lakes, baits, translations</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>publiccatch</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/publiccatch.db</Code></Table.Cell>
                                <Table.Cell>Public catches, likes, comments, approval</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>backgroundtasks</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/backgroundtasks.db</Code></Table.Cell>
                                <Table.Cell><Code inline>pending_blob_backup</Code> queue</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>forum</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/forum.db</Code></Table.Cell>
                                <Table.Cell>Threads, comments</Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>integrations</Code></Table.Cell>
                                <Table.Cell><Code inline>WebApp/Data/integrations.db</Code></Table.Cell>
                                <Table.Cell>Facebook page tokens/bindings</Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </SegmentSubSection>

                <SegmentSubSection heading="Background tasks" nested={1}>
                    <div id="findex-background" />
                    <p>
                        Server-side work uses SQLite queues + systemd timers.
                        Client-side work uses PeriodicSync in the browser.
                    </p>
                    <MermaidDiagram chart={backgroundDiagram} />
                </SegmentSubSection>

                <SegmentSubSection heading="Authentication" nested={1}>
                    <div id="findex-auth" />
                    <p>
                        Google OAuth with PKCE for primary login. The API issues short-lived JWT access tokens
                        and stores refresh tokens in HTTP-only cookies. Both the main UI thread and the local
                        SQLite worker attach the JWT as a Bearer token on API calls.
                    </p>
                    <MermaidDiagram chart={authFlowDiagram} />

                    <Table compact>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Mechanism</Table.HeaderCell>
                                <Table.HeaderCell>Role</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            <Table.Row>
                                <Table.Cell>Google OAuth PKCE</Table.Cell>
                                <Table.Cell>
                                    Browser-based login without a client secret; authorization code exchanged
                                    via <Code inline>/api/auth/google/*</Code>
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>HTTP-only refresh cookies</Table.Cell>
                                <Table.Cell>
                                    Session renewal without exposing refresh tokens to JavaScript
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>JWT bearer</Table.Cell>
                                <Table.Cell>
                                    Access token on API requests from the UI and Web Worker; validated by
                                    Axum JWT middleware
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell>Facebook auth</Table.Cell>
                                <Table.Cell>
                                    Alternative login via <Code inline>/api/auth/facebook/*</Code> for
                                    Facebook-connected features
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell><Code inline>withTokenRefreshRetry</Code></Table.Cell>
                                <Table.Cell>
                                    Client-side wrapper that transparently refreshes the JWT on 401 before
                                    retrying the request
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </SegmentSubSection>

                <SegmentSubSection heading="Key data flows" nested={1}>
                    <div id="findex-flows" />

                    <h4>Public catch share</h4>
                    <MermaidDiagram chart={publicCatchShareDiagram} />

                    <h4>Private data sync (Google Drive)</h4>
                    <MermaidDiagram chart={privateDataSyncDiagram} />
                </SegmentSubSection>
            </SegmentSubSection>
        </SegmentDemo>
    );
};
