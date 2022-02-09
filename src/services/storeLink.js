// busca os links salvos
export async function getLinksSave(key) {
    const myLinks = await localStorage.getItem(key);

    let linksSaves = JSON.parse(myLinks) || [];

    return linksSaves;
}

// salvar um link no local storage
export async function saveLink(key, newLink) {
    let linksStored = await getLinksSave(key);

    const hasLink = linksStored.some( link => link.id === newLink.id);

    if (hasLink) {
        console.log('Esse link ja existe.');
        return;
    }

    linksStored.push(newLink);
    await localStorage.setItem(key, JSON.stringify(linksStored));
    console.log('Link salvo com sucesso.');
}

// Deletar um link salvo 
export async function deleteLink(links, id) {
    let myLinks = links.filter( item => {
        return (item.id !== id);
    });

    await localStorage.setItem('@saveLink', JSON.stringify(myLinks));
    console.log('Link deletado com sucesso.');
    return myLinks;
}
