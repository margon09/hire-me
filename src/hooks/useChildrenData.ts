import { useState, useEffect, useCallback } from 'react'
import { nurseryApiClient } from '../services/apiClient'
import { Child } from '../types'
import { formatToLocalTime, getFormattedDate, isPastTime } from '../utils/dateUtils'


export const useChildrenData = () => {

  const DEFAULT_CHECKOUT_TIME = '16:00'
  const GROUP_ID = process.env.REACT_APP_GROUP_ID
  const INSTITUTION_ID = process.env.REACT_APP_INSTITUTION_ID

  const [childrenData, setChildrenData] = useState<Child[]>([])
  const [visibleCount, setVisibleCount] = useState<number>(10)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)


  useEffect(() => {
    setLoading(true)
    setError(null)
    nurseryApiClient
      .get("/daycare/tablet/group",
        {
          params: {
            groupId: GROUP_ID,
            institutionId: INSTITUTION_ID
          }
        }).then(res => setChildrenData(res.data.children))
      .catch(err => {
        setError('Failed to load children data. Please try again later.')
      })
      .finally(() => {
        setLoading(false)
      })
  }, [GROUP_ID, INSTITUTION_ID])


  const checkInChild = useCallback((childId: string) => {

    nurseryApiClient
      .post(`/v2/children/${childId}/checkins`,
        { pickupTime: DEFAULT_CHECKOUT_TIME }
      ).then(() => {
        setChildrenData(prevState =>
          prevState.map(child =>
            child.childId === childId
              ? { ...child, checkedIn: true, pickupTime: getFormattedDate(DEFAULT_CHECKOUT_TIME) }
              : child
          )
        )
      })
      .catch(err => {
        setError(`Failed to check in child with ID ${childId}. Please try again.`)
      })
  }, [])

  const checkOutChild = useCallback((childId: string) => {

    nurseryApiClient
      .post(`/v2/children/${childId}/checkout`)
      .then(() => {
        setChildrenData(prevState =>
          prevState.map(child =>
            child.childId === childId
              ? { ...child, checkedIn: false, pickupTime: null }
              : child
          )
        )
      })
      .catch(err => {
        setError(`Failed to check out child with ID ${childId}. Please try again.`)
      })
  }, [])

  const loadMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 10)
  }, [])

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 100
    ) {
      loadMore()
    }
  }, [loadMore])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return {
    childrenData: childrenData.slice(0, visibleCount),
    loading,
    error,
    DEFAULT_CHECKOUT_TIME,
    checkInChild,
    checkOutChild,
    isPastTime,
    formatToLocalTime,
  }
}
