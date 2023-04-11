export const Catalog = (
    games,
) => {

    console.log(games);
    return (
        <section id="catalog-page">
            <h1>All Games</h1>
            {/* <!-- Display div: with information about every game (if any) --> */}
            {games.map}


            {/* <!-- Display paragraph: If there is no games  --> */}
            <h3 className="no-articles">No articles yet</h3>
        </section>
    )
}