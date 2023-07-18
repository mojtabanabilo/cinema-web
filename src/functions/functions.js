export const shorten = (str, a, b) => {
    return str.split(" ").slice(a,b).join(" ");
}

export const starHandler = (ary ,id) => {
    if(ary) return ary.find(i => i.id === id);
}
