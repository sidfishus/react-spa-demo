import { useEffect, useId, useRef } from "react";
import mermaid from "mermaid";

let mermaidInitialized = false;

const initializeMermaid = () => {
    if (mermaidInitialized) {
        return;
    }

    mermaid.initialize({
        startOnLoad: false,
        theme: "base",
        themeVariables: {
            primaryColor: "#e8f4fc",
            primaryTextColor: "#1a1a1a",
            primaryBorderColor: "#2185D0",
            lineColor: "#5c6b7a",
            secondaryColor: "#f4f7fb",
            tertiaryColor: "#eef2f7",
            noteBkgColor: "#f4f7fb",
            noteTextColor: "#333",
            actorBkg: "#e8f4fc",
            actorBorder: "#2185D0",
            actorTextColor: "#1a1a1a",
            signalColor: "#333",
            fontFamily: "system-ui, -apple-system, sans-serif",
        },
        flowchart: {
            htmlLabels: true,
            curve: "basis",
        },
        sequence: {
            actorMargin: 40,
            messageMargin: 35,
        },
    });

    mermaidInitialized = true;
};

export interface IMermaidDiagramProps {
    chart: string;
};

export const MermaidDiagram = (props: IMermaidDiagramProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const reactId = useId().replace(/:/g, "");

    useEffect(() => {
        initializeMermaid();

        const container = containerRef.current;
        if (!container) {
            return;
        }

        const renderId = `mermaid-${reactId}`;

        mermaid.render(renderId, props.chart.trim())
            .then(({ svg }) => {
                container.innerHTML = svg;
            })
            .catch((error) => {
                console.error("Mermaid render failed:", error);
            });
    }, [props.chart, reactId]);

    return (
        <div className="findex-architecture-diagram" ref={containerRef} />
    );
};
