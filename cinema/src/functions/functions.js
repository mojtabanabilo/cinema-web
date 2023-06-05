export const shorten = (str, a, b) => {
    return str.split(" ").slice(a,b).join(" ");
}
export const addVoteCount = ary => {
    const finedData = ary.findIndex(i => i.id === params.id);
    return finedData.vote_count + 1;
}
