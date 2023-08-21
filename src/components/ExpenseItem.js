import React, { useContext } from "react"
import { TiDelete } from 'react-icons/ti'
import { AppContext } from "../context/AppContext"
import add from '../resources/plus.png'
import reduce from '../resources/remove.png'


export default function ExpenseItem(props) {

    const { dispatch, currency } = useContext(AppContext)

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id
        })
    }

    const increaseAllocation = (name) => {
        const addExpense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'ADD_EXPENSE',
            payload: addExpense
        })
    }

    const decreaseAllocation = (name) => {
        const decreaseExpense = {
            name: name,
            cost: 10
        }

        dispatch({
            type: 'RED_EXPENSE',
            payload: decreaseExpense
        })
    }

    return (
        <>
            <tr>
                <td>{props.name}</td>
                <td>{currency}{props.cost}</td>
                <td>
                    <img src={add}
                        alt="Increase by 10"
                        style={{ border: 'none' }}
                        onClick={event => increaseAllocation(props.name)}>
                    </img>
                </td>
                <td>
                    <img src={reduce}
                        alt="Decrease by 10"
                        style={{ border: 'none' }} onClick={event => decreaseAllocation(props.name)}></img></td>
                <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
            </tr >
        </>
    )
}