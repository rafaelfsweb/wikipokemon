import React , { useState, useEffect } from 'react';
import Pagination from './../../Components/Pagination';
import axios from 'axios';
import BerriesList from '../../Components/BerriesList';

function Berries() {

  let apiDomain = "https://pokeapi.co/api/v2/"

  const [berry, setBerry] = useState([])
  const [currentePage, setCurrentPage] = useState(apiDomain + "berry")
  const [nextPage, setNextPage] = useState()
  const [previousPage, setPreviousPage] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    let cancel
    axios.get(currentePage, {
      cancelToken: new axios.CancelToken(c => cancel = c)
    }).then( resp => {
      setLoading(false)
      setNextPage(resp.data.next)
      setPreviousPage(resp.data.previous)     
      setBerry(resp.data.results.map(p => p.name))
    })

    return () => cancel()
  }, [currentePage])

  function gotoNextPage() {
    setCurrentPage(nextPage)
  }

  function gotoPreviousPage() {
    setCurrentPage(previousPage)
  }

  if (loading) return "Loading ... "

  return (
    <>
      <BerriesList berry={berry} />
      <Pagination 
          gotoNextPage={nextPage ? gotoNextPage : null} 
          gotoPreviousPage={previousPage ? gotoPreviousPage : null}
      />
    </>
  );
}

export default Berries;