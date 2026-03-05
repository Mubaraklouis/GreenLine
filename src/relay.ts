import SmeeClient from "smee-client";


export const startSmeeRelay = (smeeUrl: string, targetPort: number) => {

    const smee = new SmeeClient({
        source: smeeUrl,
        target: `http://localhost:${targetPort}/api/webhook/github`,
        logger: console 
    });

    const events = smee.start();

    console.log(`Relay Active: Forwarding from ${smeeUrl} to local port ${targetPort}`);

    return events;
}