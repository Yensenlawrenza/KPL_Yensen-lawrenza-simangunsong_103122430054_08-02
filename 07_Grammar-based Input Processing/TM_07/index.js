/**
 * JSDoc ini opsional mau dibuat cek ketat atau tidak.
 * Boleh dihapus, boleh dibuat ketat.
 * @param {string} text Teks yang diambil dari berkas
 * @returns {import('./structure').RobotsTxt} 
 */
function parseRobots(text) {
    const lines = text.split('\n');

    const result = {
        agents: {},
        Sitemap: []
    };

    let currentAgents = [];

    for (let rawLine of lines) {
        const line = rawLine.trim();

        if (!line || line.startsWith('#')) continue;

        const parts = line.split(':');
        if (parts.length < 2) continue;

        const key = parts[0].trim().toLowerCase();
        const value = parts.slice(1).join(':').trim();

        if (key === 'user-agent') {
            const agent = value.toLowerCase();
            currentAgents = [agent];

            if (!result.agents[agent]) {
                result.agents[agent] = {
                    Allow: [],
                    Disallow: []
                };
            }
        } 
       else if (key === 'allow') {
    if (value !== '') {
        for (let agent of currentAgents) {
            result.agents[agent].Allow.push(value);
        }
    }
} 
else if (key === 'disallow') {
    if (value !== '') {
        for (let agent of currentAgents) {
            result.agents[agent].Disallow.push(value);
        }
    }
}
        else if (key === 'sitemap') {
            result.Sitemap.push(value);
        }
    }

    return result;
}

module.exports = parseRobots;