import "../Components/ToPrintObj.css"
function PrintingObj(props) {
    return (
        <div>
            <div className="card">
                <h2>{props.getUserBorn.name}</h2>
                <h2>{props.getUserBorn.birthday}</h2>
                <h2>{props.getUserBorn.favoriteFoods.meats[0]}</h2>
                <h2>{props.getUserBorn.favoriteFoods.meats[1]}</h2>
                <h2>{props.getUserBorn.favoriteFoods.fish[0]}</h2>
                <h2>{props.getUserBorn.favoriteFoods.fish[1]}</h2>
            </div>
        </div>

    )
}

export { PrintingObj };