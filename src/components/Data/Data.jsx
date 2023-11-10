import useJsonFetch from "../../hooks/useJsonFetch"

export  function Data() {

    const {data, loading, error} = useJsonFetch('http://localhost:7070/data', {status:''});

  return (
    <div>Status: {data.status}</div>
  )
}
