import useJsonFetch from "../../hooks/useJsonFetch";

export  function Error() {
    const {data, loading, error} = useJsonFetch('http://localhost:7070/error', {status:''});
    console.log(error)
  return (
    <div>{error?.message}</div>
  )
}
