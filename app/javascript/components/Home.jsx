import React, { Component } from 'react';
import { link } from 'react-router-dom';
import MaterialTable from 'material-table';
import Grid from '@material-ui/core';
import Journals from './Journals';
export default class Home extends Component {
    render() {
        return (
            <div>
              <Journals />       
           
            </div>
        )
    }
}
