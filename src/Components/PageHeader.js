function PageHeader(props) {
    
    let title = props.title ? props.title : "Page"

    return (
        <div style={{ margin: "20px", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
            <h1 style={{ marginBottom: "0px", marginTop: "0px" }}>{title}</h1>
            <hr  />
        </div>
    )
}

export default PageHeader