import React from 'react'

export const TrendingFilterButtons = (props) => {

    const changeFilter = (filter) => {
        if (filter === props.filter) {
            return;
        } else props.setFilter(filter);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="btn-group my-3" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("all")}>All</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("tv")}>TV</button>
                    <button type="button" className="btn btn-outline-primary" onClick={() => changeFilter("movie")}>Movies</button>
                </div>
            </div>
        </div>
    )
}
