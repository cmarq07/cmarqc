function PageHeader(props) {
    
    let title = props.title ? props.title : "Page"

    return (
        <div style={{ width: "100%", margin: "20px" }}>
            <h1 style={{ marginBottom: "0px", marginTop: "0px" }}>{title}</h1>
            <hr style={{ width: "auto" }} />
        </div>
    )
}

export default PageHeader