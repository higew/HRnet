import Input from "../input/Input";
import { Dropdown } from "dropdown-lib-higex";
import { states, department } from "../../services/api"
import { useDispatch } from "react-redux";
import { useState } from "react";
import { saveEmployee } from "../../app/store";

function EmployeeForm() {
    // const [isSent, setIsSent] = useState(false);
    const [employeeForm, setEmployeeForm] = useState({
        firstName: "",
        lastName: "",
        startDate: "",
        department: "",
        dateOfBirth: "",
        street: "",
        city: "",
        state: "",
        zipCode: "",
    });
    const dispatch = useDispatch();

    function saveEmployees() {
        dispatch(saveEmployee(employeeForm));
        console.log(employeeForm);
        // setIsSent(true);
    }

    // function closeModal() {
    //     setIsSent(false);
    // }

    return (
        <div>
            <form action="#" id="create-employee">
            <div className="info">
                <Input
                onChange={(firstName) => {
                    setEmployeeForm({
                    ...employeeForm,
                    firstName: firstName.currentTarget.value,
                    });
                }}
                id="first-name"
                name="First Name"
                type="text"
                ></Input>
                <Input
                onChange={(lastName) => {
                    setEmployeeForm({
                    ...employeeForm,
                    lastName: lastName.currentTarget.value,
                    });
                }}
                id="last-name"
                name="Last Name"
                type="text"
                ></Input>
                <Input
                onChange={(dateOfBirth) => {
                    setEmployeeForm({
                    ...employeeForm,
                    dateOfBirth: dateOfBirth.currentTarget.value,
                    });
                }}
                id="date-of-birth"
                name="Date of Birth"
                type="date"
                ></Input>
                <Input
                onChange={(startDate) => {
                    setEmployeeForm({
                    ...employeeForm,
                    startDate: startDate.currentTarget.value,
                    });
                }}
                id="start-date"
                name="Start Date"
                type="date"
                ></Input>
            </div>

            <fieldset className="address">
                <legend>Address</legend>

                <Input
                onChange={(street) => {
                    setEmployeeForm({
                    ...employeeForm,
                    street: street.currentTarget.value,
                    });
                }}
                className="address--element"
                id="street"
                name="Street"
                type="text"
                ></Input>
                <Input
                onChange={(city) => {
                    setEmployeeForm({
                    ...employeeForm,
                    city: city.currentTarget.value,
                    });
                }}
                className="address--element"
                id="city"
                name="City"
                type="text"
                ></Input>
                <div className="address--element">
                <label htmlFor="state">State</label>
                <Dropdown
                    options={states}
                    defaultOption="Please select a state"
                    onChange={(state) => {
                    setEmployeeForm({
                        ...employeeForm,
                        state: state,
                    });
                    }}
                ></Dropdown>
                </div>
                <Input
                onChange={(zipCode) => {
                    setEmployeeForm({
                    ...employeeForm,
                    zipCode: zipCode.currentTarget.value,
                    });
                }}
                className="address--element"
                id="zip-code"
                name="Zip Code"
                type="number"
                ></Input>
            </fieldset>

            <label htmlFor="department">Department</label>
            <Dropdown
                options={department}
                defaultOption="Please select a department"
                onChange={(dep) => {
                setEmployeeForm({
                    ...employeeForm,
                    department: dep,
                });
                }}
            ></Dropdown>
            </form>

            <button onClick={saveEmployees}>Save</button>
        </div>
    )
}

export default EmployeeForm;