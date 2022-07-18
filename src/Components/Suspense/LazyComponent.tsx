const LazyComponent = ({comment}:any) => {
    return <div>
        <h1>Lazy...Users</h1>
        {comment?.map((item: any) => <h2>{item.title}</h2>)}
    </div>
}
export default LazyComponent