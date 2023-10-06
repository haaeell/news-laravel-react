const isNews = (news) =>{
    return news.map((data,i) => {
        return(
            <div className="card lg:w-96 w-full bg-base-100 shadow-xl " key={i}>
                        <figure>
                            <img
                                src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/1-5th-avenue-nyc-traffic-melanie-viola.jpg"
                                alt="Shoes"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                {data.title}
                                <div className="badge badge-secondary">NEW</div>
                            </h2>
                            <p>
                                {data.description}
                            </p>
                            <div className="card-actions justify-end">
                                <div className="badge badge-outline">
                                    {data.author}
                                </div>
                                <div className="badge badge-outline">
                                    {data.category}
                                </div>
                            </div>
                        </div>
                    </div>
        )
    })
}
const noNews = () => {
    return(
        <p>Saat Ini belum ada berita</p>
    )
}
const NewsList = ({ news }) => {
    return !news ? noNews() : isNews(news)
}

export default NewsList