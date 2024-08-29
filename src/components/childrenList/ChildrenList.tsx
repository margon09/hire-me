
import Button from '../../ui/Button'
import { StyledChildrenContainer, StyledError, StyledLoader, StyledTable } from './ChildrenList.styles'
import { formatToLocalTime } from '../../utils/dateUtils'
import { useChildrenData } from '../../hooks/useChildrenData'

const ChildrenList = () => {
    const {
        childrenData,
        loading,
        error,
        DEFAULT_CHECKOUT_TIME,
        checkInChild,
        checkOutChild,
        isPastTime,
    } = useChildrenData()

    if (loading) {
        return <StyledLoader>Loading...</StyledLoader>
    }

    if (error) {
        return <StyledError>
            <div>{ error }</div>
            <div><Button onClick={ () => window.location.reload() }>Go back</Button></div>
        </StyledError>
    }

    return (
        <StyledChildrenContainer>
            <h2>Children List</h2>
            <StyledTable>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Pick Up Time</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    { childrenData.map((child) => (
                        <tr key={ child.childId }>
                            <td>{ child.name.fullName }</td>
                            <td>{ child.checkedIn && formatToLocalTime(child.pickupTime) }</td>
                            <td>
                                { child.checkedIn ? (
                                    <Button
                                        onClick={ () => checkOutChild(child.childId) }
                                        variant="checkout"
                                    >
                                        Checkout
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={ () => checkInChild(child.childId) }
                                        variant={ isPastTime(DEFAULT_CHECKOUT_TIME) ? 'closed' : 'checkin' }
                                        disabled={ isPastTime(DEFAULT_CHECKOUT_TIME) }
                                    >
                                        { isPastTime(DEFAULT_CHECKOUT_TIME) ? 'Closed' : 'Check In' }
                                    </Button>
                                ) }
                            </td>
                        </tr>
                    )) }
                </tbody>
            </StyledTable>
        </StyledChildrenContainer>
    )
}

export default ChildrenList