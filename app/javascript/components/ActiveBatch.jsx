import React, { Component } from 'react'
import MaterialTable from 'material-table';
import Grid from '@material-ui/core';
import { Container } from 'react-bootstrap';

export default class ActiveBatch extends Component {
    render() {
        return (
           <div>
            
               
                 <MaterialTable
                
                columns={[
                    { title: 'Reference', field: 'reference' },
                    { title: 'Date', field: 'date', type: 'date'  },
                    { title: 'Account', field: 'account'},
                    {title: 'Description', field: 'description'},
                    { title: 'Amount', field: 'amount', type: 'currency' }
                ]}
                data={[{ reference: 'Inv23041', date: '22/05/05', account: '2000-100',description: 'Baking supplies', amount: 12454.00 }]}
                title="Journal Entries"
                options={{
                    search: false}}
                />
           
            </div>
        )
    }
}




