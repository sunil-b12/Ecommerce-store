import React from "react";
import { NavLink } from 'react-router-dom'
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from "@material-tailwind/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
const Toggle = () => {
    const [open, setOpen] = React.useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false)
    return (
        <React.Fragment>
            <Button onClick={openDrawer} className="bg-white px-3">
                <i className="fa-solid fa-bars fa-2xl text-black"></i>
            </Button>
            <Drawer open={open} onClose={closeDrawer} className="p-4">
                <div className="mb-6 flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                        All Catagory
                    </Typography>
                    <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                        <XMarkIcon strokeWidth={2} className="h-5 w-5" />
                    </IconButton>
                </div>
                <div className="grid gap-2">
                    
                    <Button className="bg-[#f26522]"><NavLink to="/category/smartphones">Smartphones</NavLink></Button>
                    <Button className="bg-[#f26522]"><NavLink to="/category/skincare">Skincare</NavLink></Button>
                    <Button className="bg-[#f26522]"><NavLink to="/category/furniture">Furniture</NavLink></Button>
                    <Button className="bg-[#f26522]"><NavLink to="/category/home-decoration">Home decoration</NavLink></Button>
                    <Button className="bg-[#f26522]"><NavLink to="/data">Data</NavLink></Button>
                </div>
            </Drawer>
        </React.Fragment>
    )
}

export default Toggle