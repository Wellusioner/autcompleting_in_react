import React, { useState } from "react";
import axios from 'axios'
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import throttle from 'lodash/throttle'
import { API_ROOT } from "../../../service/api";

class AutoComplete extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            value: ''
        };
        this.handleRequest = throttle(this.handleRequest, 400);
    }


    handleChange = value => {
        this.setState({
            value: value ? value : ''
        }, () => {
            this.handleRequest(this.state.value);
        });
    };

    handleRequest = async word => {
        const result = await axios.get(`${API_ROOT}/search?q=${word}`);
        this.setState({
            data: [...result.data.data]
        })
    };

    render(){
        const { data } = this.state;
        return <>
            <Autocomplete
                id="combo-box-demo"
                options={data}
                getOptionLabel={(option) => option.product}
                onInputChange={(e,val) => this.handleChange(val)}
                style={{ width: '100%' }}
                renderInput={(params) => <TextField {...params} label="Type to search" variant="outlined" />}
            />
        </>
    }
}

export default AutoComplete