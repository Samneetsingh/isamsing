import React from "react";

interface AgeProps {
  dateOfBirth: Date;
}

class Age extends React.Component<AgeProps> {
  dateOfBirth: Date;

  constructor(props: AgeProps) {
    super(props);
    this.dateOfBirth = props.dateOfBirth;
  }

  render() {
    const currentAge = this.getAge(this.dateOfBirth);
    return <span>{currentAge}</span>;
  }

  private getAge(birthDate: Date): number {
    return new Date().getFullYear() - birthDate.getFullYear();
  }
}

export default Age;
