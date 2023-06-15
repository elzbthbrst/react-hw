import { createSelector } from 'reselect'

export const selecDishList = state => state.dish.list
export const selectDishEdit= state => state.dish.dishEdit

export const selecWaiterList = state => state.waiter.list
export const selectWaiterEdit= state => state.waiter.waiterEdit


export const selecTableList = state => state.table.list
export const selectTableEdit= state => state.table.tableEdit

export const selecOrderList = state => state.order.list
export const selectOrderEdit= state => state.order.orderEdit
export const selectOrderBill= state => state.order.orderBill


export const selectJointOrders = createSelector(
    selecTableList,
    selecWaiterList,
    selecOrderList,
    (tableList, waiterList, orderList) => {
       const newTableList = tableList.reduce((list, table)=>{
        list[table.id] = table

        return list
       },{})

       const newWaiterList = waiterList.reduce((list, waiter)=>{
        list[waiter.id] = waiter

        return list
       },{})

       return orderList.map((order) => ({
        ...order,
        table: newTableList[order.tableId],
        waiter: newWaiterList[order.waiterId]
       })) 
    }
)


export const selectOptions = createSelector(
    selecTableList,
    selecWaiterList,
    selecDishList,
    (tableList, waiterList, dishList) => {
        const newTableList = tableList.map((table) => {
            return {
                'label' : `Table number ${table.number}` ,
                'value' : table.id
            }
        })

        const newWaiterList = waiterList.map((waiter) => {
            return {
                'label' : waiter.firstName ,
                'value' : waiter.id
            }
        })

        const newDishList = dishList.map((dish) => {
            return {
                'label' : dish.name ,
                'value' : dish.id
            }
        })

        return {
            table: newTableList,
            waiter: newWaiterList,
            dish : newDishList
        }

    }
)




export const selectOrderEditSelect = createSelector(
    selectOrderEdit, 
    (orderEdit) => {
        const dishes = orderEdit.dishes.map((dish) => {
            return dish.dishId
        })
        return {
            ...orderEdit,
            "dishes": dishes
        }
    }
)