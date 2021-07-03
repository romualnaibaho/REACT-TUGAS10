import React, { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import { Label, Grid, Icon, Image, Divider, Flag, Input } from "semantic-ui-react";

class Navigation extends Component{

    render(){
        return(
            <div>
                <Grid columns={3} style={{marginTop: "20px"}}>
                    <Grid.Row>
                        <Grid.Column width={3} textAlign="center">
                            <span>
                                <Flag name="id"></Flag>
                                <Icon name="angle left"></Icon>
                                <Icon name="angle right"></Icon>
                            </span>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Input fluid icon='star' placeholder='Search...' />
                        </Grid.Column>

                        <Grid.Column width={3}>
                            <Image src="https://react.semantic-ui.com/images/avatar/large/patrick.png" alt="Pic" avatar />
                            <span>Romual Naibaho</span>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Divider horizontal >Selamat Datang !!!</Divider>
            </div>
        );
    }
}

export default Navigation;