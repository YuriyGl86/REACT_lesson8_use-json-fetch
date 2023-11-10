import useJsonFetch from "../../hooks/useJsonFetch";

export  function Loading() {
    const {data, loading, error} = useJsonFetch('http://localhost:7070/loading', {status:''});

  return (
    <div>{loading?'loading...': 'loading completed'}</div>
  )
}
