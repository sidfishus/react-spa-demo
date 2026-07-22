import { IRoutedCompProps } from "../../routes.tsx";
import { CreateImage, ITechnologyInfo, PortfolioBase, TechnologyTable } from "./PortfolioBase.tsx";
import { SegmentDemo, SegmentSubSection } from "../Presentation.tsx";
import { FindexArchitecture } from "./FindexArchitecture.tsx";
import { CreateRepoUrl } from "../../CreateRepoUrl.ts";
import { Link } from "react-router-dom";
import { ICarouselImg } from "../PortfolioCarousel.tsx";

export interface IFindexPortfolioProps extends IRoutedCompProps {
};

const carouselImgs: ICarouselImg[] = [
    CreateImage(CreateRepoUrl("img/findex/IMG_0599.PNG"),
        <>Engage on catches with likes and comments.</>),
    CreateImage(CreateRepoUrl("img/findex/IMG_0598.PNG"),
        <>Latest catch feed.</>),
    CreateImage(CreateRepoUrl("img/findex/findex1.jpg"),
        <>Registering a new bait with many configurable properties.</>),
    CreateImage(CreateRepoUrl("img/findex/findex2.jpg"),
        <>Customising an existing bait and its properties: use as-is, copy and customise, or edit the original.</>),
    CreateImage(CreateRepoUrl("img/findex/findex3.jpg"),
        <>Adding further properties to a bait from a searchable list.</>),
    CreateImage(CreateRepoUrl("img/findex/addbaitmix.png"),
        <>Creating a bait mix from multiple bait components.</>),
    CreateImage(CreateRepoUrl("img/findex/filters-radius.png"),
        <>Filtering fisheries by location and search radius, auto-selecting your current location.</>),
    CreateImage(CreateRepoUrl("img/findex/spotlist-1.png"),
        <>Search and manage your fishing spots.</>),
    CreateImage(CreateRepoUrl("img/findex/spotlist-2.png"),
        <>Managing spots within a swim.</>),
    CreateImage(CreateRepoUrl("img/findex/spot-picker-mobile.png"),
        <>Pinpoint a hotspot and record it's details.</>),
    CreateImage(CreateRepoUrl("img/findex/Untitled 10.png"),
        <>Uploading a new catch.</>),
    CreateImage(CreateRepoUrl("img/findex/catcheditspotpicker.png"),
        <>Recording a catch with fishery, swim and spot details.</>),
    CreateImage(CreateRepoUrl("img/findex/cloud-restore.png"),
        <>Restoring data from the user's private Google Drive.</>),
    CreateImage(CreateRepoUrl("img/findex/catchfilters.jpg"),
        <>Filtering catches by species, weight and other attributes.</>),
    CreateImage(CreateRepoUrl("img/findex/findex4.jpg"),
        <>Browsing the forum.</>),
    CreateImage(CreateRepoUrl("img/findex/findex5.jpg"),
        <>Voting on proposed features in a forum post.</>),
];

const thumbnailImgs: string[] = [
    CreateRepoUrl("img/findex/IMG_0599.PNG"),
    CreateRepoUrl("img/findex/IMG_0598.PNG"),
    CreateRepoUrl("img/findex/findex1.jpg"),
    CreateRepoUrl("img/findex/findex2.jpg"),
    CreateRepoUrl("img/findex/findex3.jpg"),
    CreateRepoUrl("img/findex/addbaitmix.png"),
    CreateRepoUrl("img/findex/filters-radius.png"),
    CreateRepoUrl("img/findex/spotlist-1.png"),
    CreateRepoUrl("img/findex/spotlist-2.png"),
    CreateRepoUrl("img/findex/spot-picker-mobile.png"),
    CreateRepoUrl("img/findex/Untitled 10.png"),
    CreateRepoUrl("img/findex/catcheditspotpicker.png"),
    CreateRepoUrl("img/findex/cloud-restore.png"),
    CreateRepoUrl("img/findex/catchfilters.jpg"),
    CreateRepoUrl("img/findex/findex4.jpg"),
    CreateRepoUrl("img/findex/findex5.jpg"),
];

export const FindexPortfolio = (props: IFindexPortfolioProps) => {
    return (
        <PortfolioBase
            {...props}
            writeUp={WriteUp()}
            carouselImgs={carouselImgs}
            thumbnailImgs={thumbnailImgs}
            additionalCarouselFileClass={"PortfolioCarouselResponsiveFileClass"}
            additionalThumbnailFileClass={"FishingWebAppThumbs"}
            heading={heading}
        />
    );
};

const heading = (
    <SegmentDemo heading="Findex">
        <SegmentSubSection>
            <p>
                <a href={"https://www.findex.fish"}>Findex</a>{" "}
                <img
                    src={CreateRepoUrl("img/findex/logo-header-transparent.svg")}
                    alt=""
                    aria-hidden="true"
                    style={{ height: "1.4em", verticalAlign: "middle", marginLeft: "0.15em", marginRight: "0.35em" }}
                />
                a synergy of my 2 favourite hobbies, version 3. Live and free to be used since February 2026, also on{" "}
                <a href={"https://www.facebook.com/findex.fish"}>Facebook</a>.
            </p>
            <p>
                This is a continuation of my{" "}
                <Link to="/portfolio/fishingwebapp">fishing web application</Link>{" "}
                concept, but taken in a different direction
                and rewritten from scratch.
                Still very much about recording telemetry related to fishing, but also incorporating social media
                features. It is intended to become the single digital platform for fishing worldwide.
            </p>
            <p>
                The typical useage is to use the app when you're out fishing. When you catch a fish, record everything
                in as much detail as you need, and then optionally share
                some or all of it with the community. Over time, you can then analyse your own results
                specifically or across the entire public data set and do a variety of reporting on it. This will enable
                you to visualise trends and patterns in terms of what works, when, and under what conditions.
            </p>
            <p>
                It also features a feed showcasing the latest catches from around the world, filtered according to your
                own requirements, where you can optionally like and comment on them.
            </p>
            <p>
                The app is local first and mobile first. Data is stored on the user's device and periodically
                synchronised to their private Google Drive.{" "}
                <a href={"https://developers.google.com/identity"}>Google Identity</a> is used for seamless login and
                access to Google Drive. Why? To save on storage costs my end, but also so the user's
                unshared data lives on their device because fisherman can be cagey about sharing their secrets.
                Storing data locally also means the app can work offline and feels very fast, since the majority of
                the app and configuration data already lives on their device.
            </p>
        </SegmentSubSection>
    </SegmentDemo>
);

const WriteUp = (): JSX.Element => {
    return (
        <>
            <SegmentDemo heading="Features">
                <SegmentSubSection>
                    <ul>
                        <li>Social catch feed with likes and comments.</li>
                        <li>
                            Bait and bait mix management where you can record baits in as much detail as you need,
                            building up a history of what worked that you can visualise with rich analytics.
                        </li>
                        <li>
                            Fishery, swim and spot management including location based search, radius filtering, and
                            a spot picker for recording hotspots.
                        </li>
                        <li>Catch recording and filtering by species, weight and other attributes.</li>
                        <li>
                            User uploaded images are validated using the{" "}
                            <a href={"https://github.com/notAI-tech/NudeNet"}>NudeNet</a> Python library. Anything that
                            scores above a certain threshold goes through a manual approval process before it gets
                            published. Anything below that threshold is allowed
                            automatically.
                        </li>
                        <li>Community forum with feature voting.</li>
                        <li>Available in over 20 languages, which can be changed at runtime.</li>
                        <li>
                            Microservice REST API architecture with multiple{" "}
                            <a href={"https://www.sqlite.org/"}>SQLite</a> databases, currently configured as a monolith
                            for ease of development and deployment until it scales.
                        </li>
                        <li>
                            Runs on-premise on a dedicated server to cut down costs, with periodic cloud backup.
                        </li>
                    </ul>
                </SegmentSubSection>
            </SegmentDemo>

            <SegmentDemo heading="Technology">
                <SegmentSubSection>
                    <p>Below is the list of technology incorporated:</p>
                    {TechnologyTable(technology)}
                </SegmentSubSection>
            </SegmentDemo>

            <FindexArchitecture />
        </>
    );
};

const technology: ITechnologyInfo[] = [
    {
        name: <><a href={"https://www.rust-lang.org/"}>Rust</a></>,
        descr: <>Backend REST API. Originally written in C#, then converted to Go, and now Rust. It's seemingly a meme to
        rewrite something in Rust, just because, however IMO it's clearly the best backend language, and the language I
        have the most fun and confidence using.</>
    },
    {
        name: <><a href={"https://docs.rs/axum/latest/axum/"}>Axum</a></>,
        descr: <>Rust web framework for the REST microservices.</>
    },
    {
        name: <><a href={"https://tokio.rs/"}>Tokio</a></>,
        descr: <>Async runtime powering the backend.</>
    },
    {
        name: <><a href={"https://github.com/tower-rs/tower"}>Tower</a></>,
        descr: <>Middleware and service abstractions for the HTTP stack.</>
    },
    {
        name: <>
            <a href={"https://www.sqlite.org/"}>SQLite</a>{" "}
            (<a href={"https://github.com/rusqlite/rusqlite"}>rusqlite</a>,{" "}
            <a href={"https://github.com/Deadpool-rs/deadpool/tree/master/deadpool-sqlite"}>deadpool-sqlite</a>)
        </>,
        descr: <>Embedded database on the backend with connection pooling across multiple SQLite databases.</>
    },
    {
        name: <><a href={"https://svelte.dev/"}>Svelte 5</a></>,
        descr: <>Reactive web-based user interfaces. Mostly a single page application with some static pages for SEO.
        More concise, simpler, and faster than React.</>
    },
    {
        name: <><a href={"https://www.typescriptlang.org/"}>TypeScript</a></>,
        descr: <>The language used in the frontend.</>
    },
    {
        name: <><a href={"https://vite.dev/"}>Vite 7</a></>,
        descr: <>Development and production bundling for the client application.</>
    },
    {
        name: <><a href={"https://sass-lang.com/"}>SCSS</a></>,
        descr: <>Stylesheets with variables, nesting, and other conveniences over plain CSS.</>
    },
    {
        name: <><a href={"https://vitest.dev/"}>Vitest</a></>,
        descr: <>Frontend unit and integration tests.</>
    },
    {
        name: <><a href={"https://sqlite.org/wasm/doc/trunk/index.md"}>SQLite WASM</a></>,
        descr: <>Client-side database for storing data on the user's device, enabling local-first and offline functionality.</>
    },
    {
        name: <>
            <a href={"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}>Web Workers</a> +{" "}
            <a href={"https://github.com/GoogleChromeLabs/comlink"}>Comlink</a>
        </>,
        descr: <>Background tasks and sync logic off the main thread, with Comlink simplifying worker communication.</>
    },
    {
        name: <><a href={"https://vite-pwa-org.netlify.app/"}>Service Worker</a> (Vite PWA)</>,
        descr: <>Progressive web app with offline caching and installability via vite-plugin-pwa.</>
    },
    {
        name: <><a href={"https://developer.mozilla.org/en-US/docs/Web/API/File_System_API/Origin_private_file_system"}>Origin Private File System</a> (OPFS)</>,
        descr: <>Persistent file storage in the browser for local data and assets.</>
    },
    {
        name: <>
            <a href={"https://leafletjs.com/"}>Leaflet</a> +{" "}
            <a href={"https://www.openstreetmap.org/"}>OpenStreetMap</a> tiles
        </>,
        descr: <>Interactive maps for fisheries, swims, spots, and location-based search.</>
    },
    {
        name: <><a href={"https://developers.google.com/identity"}>Google Identity</a></>,
        descr: <>Seamless login and access to Google Drive.</>
    },
    {
        name: <><a href={"https://www.google.com/drive/"}>Google Drive</a></>,
        descr: <>Periodic synchronisation and backup to the user's private Google Drive account.</>
    },
    {
        name: <><a href={"https://cloud.google.com/storage"}>Google Cloud Storage</a></>,
        descr: <>Server-side database and blob backups.</>
    },
    {
        name: <><a href={"https://dev.maxmind.com/geoip/geolite2-free-geolocation-data/"}>MaxMind GeoLite2</a></>,
        descr: <>IP geolocation for location-aware features.</>
    },
    {
        name: <>
            <a href={"https://developers.facebook.com/docs/graph-api/"}>Meta Graph API</a>,{" "}
            <a href={"https://developers.facebook.com/docs/marketing-api/conversions-api/"}>Conversions API</a>,{" "}
            <a href={"https://developers.facebook.com/docs/meta-pixel/"}>Pixel</a>
        </>,
        descr: <>Facebook page integration, conversion tracking, and analytics.</>
    },
    {
        name: <><a href={"https://www.python.org/"}>Python</a></>,
        descr: <>Used for image validation via NudeNet.</>
    },
];
