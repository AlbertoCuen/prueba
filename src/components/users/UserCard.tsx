import { Card } from "@mui/material"

export const UserCard = (props: any) => {
    return (
        <div>
            <Card>
                <h3>
                    {props.name}
                </h3>

                <h3>
                    {props.email}
                </h3>

            </Card>
        </div>
    )
}