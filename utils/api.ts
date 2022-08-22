export const getAlbumsData = async () => {
    let res = await fetch(
        `https://jsonplaceholder.typicode.com/users/1/albums`
    );
    return res.json();
};

export const getAlbumData = async (id: string, term?: string) => {
    let url = `https://jsonplaceholder.typicode.com/albums/${id}/photos?`;

    if (!!term) {
        url += `&q=${term}`;
    }

    let res = await fetch(url);

    return res.json();
};