export default function range(start, end) {
    const range = [];

    if (typeof start !== 'number' || typeof end !== 'number') return range;

    for (let i = start; i <= end; i++) range.push(i);
    return range;
}