import React, { Component } from 'react'

interface Props {
    name: string,
    dateOfBirth: Date,
    location: string
}
class Details extends Component<Props> {
    private getAge(birthDate: Date): number {
        return new Date().getFullYear() - birthDate.getFullYear()
    }

    render() {
        const currentAge: number = this.getAge(this.props.dateOfBirth)
        return (
            <div>
                <h3>Details</h3>
                <p>
                    <strong>Name:</strong>
                    <br></br>
                    Samneet Singh
                    <br></br>
                    <strong>Age:</strong>
                    <br></br>
                    {currentAge}
                    <br></br>
                    <strong>Location:</strong>
                    <br></br>
                    Montreal, Canada
                </p>
            </div>
        )
    }
}

export default Details