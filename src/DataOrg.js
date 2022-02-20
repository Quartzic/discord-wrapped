import * as d3 from "d3";
import words from 'profane-words'

export function json(data) {
    return JSON.stringify(data);
}

export function avgMessageLength(data) {
    return d3.mean(data.messages.map(msg => msg.content.length));
}

export function numberOfCalls(data) {
    return data.messages.filter(msg => msg.type === "Call").length;
}

export function totalLengthOfCalls(data) {
    return data.messages.filter(msg => msg.type === "Call").reduce(
        (total, msg) => total + Date.parse(msg.callEndedTimestamp) - Date.parse(msg.timestamp),
        0,
    );
}

export function numberOfAttachments(data) {
    return data.messages.reduce((sum, msg) => sum + msg.attachments.length, 0);
}

export function numberMessagesByPerson(data) {
    const infoByUser = {};
    for (const msg of data.messages) {
        const id = msg.author.id;
        if (infoByUser[id] === undefined) {
            infoByUser[id] = {
                count: 0,
                name: `${msg.author.name}#${msg.author.discriminator}`,
                image: msg.author.avatarUrl,
            };
        }
        ++infoByUser[id].count;
    }
    return Object.values(infoByUser).sort((a, b) => b.count - a.count);
}

export function numberMessagesByContent(data) {
    const infoByContent = {};
    for (const msg of data.messages) {
        const id = msg.content;
        if (id === "") continue;
        if (infoByContent[id] === undefined) {
            infoByContent[id] = {
                count: 0,
                content: id,
            };
        }
        ++infoByContent[id].count;
    }
    return Object.values(infoByContent).sort((a, b) => b.count - a.count);
}

export function timeSentMost(data) {
    return d3.mode(data.messages.map(msg => new Date(msg.timestamp).getHours()))
}

export function numberReactions(data) {
    const infoByReact = {};
    for (const msg of data.messages) {
        for (const react of msg.reactions) {
            const id = react.emoji.id ?? react.emoji.name;
            if (infoByReact[id] === undefined) {
                infoByReact[id] = {
                    count: 0,
                    name: react.emoji.name,
                    image: react.emoji.imageUrl,
                };
            }
            infoByReact[id].count += react.count;
        }
    }
    return Object.values(infoByReact).sort((a, b) => b.count - a.count);
}

export function profanityUsed(data) {
    return data.messages.filter(msg => words.some(word => new RegExp(`[\\^\\W]${word}[\\W$]`).test(msg.content.toLowerCase()))).length;
}
