import React from "react";
import { Avatar } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import "./LoggedInProfile.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export default function LoggedInProfile(props) {
    const style = {
        width: '100%',
        maxWidth: '100%',
        bgcolor: 'background.paper',
        color: 'black'

    };
    let test = "";
    if (props.isLandlord) {
        return (
            <>
                <div className="relative block">
                    <Avatar
                        alt="?"
                        src="public/images/no-profile-image.png"
                        className="!w-28 !h-28 !w-44 !h-44 mx-auto"
                    />
                    <img
                        src="public/images/hone-h-logo.png"
                        className="absolute bottom-0 right-28 w-14"
                    />
                </div>
                <p className="text-black mt-4 block mb-5"><strong>Alexander Thompson</strong></p>

                <Divider />
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <div className="rounded-full bg-orange-500 w-10 h-10 mr-5">
                            <FavoriteIcon className="text-white relative left-2 top-2 text-xs" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Listings</p>
                            <p className="text-xs">4 Properties</p>
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button divider>
                        <div className="rounded-full bg-orange-500 w-10 h-10 mr-5">
                            <FavoriteIcon className="text-white relative left-2 top-2 text-xs" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Likes</p>
                            <p className="text-xs">4 Properties</p>
                        </div>
                    </ListItem>
                    <ListItem button>
                        <div>
                            <p className="text-sm">Property Credibility</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Edit Credibilities</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Profile Information</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Edit Name, Age, Description, etc...</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Account Settings</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Manage your Account</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">About Us</p>
                            <p className="text-xs">About Hone</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Privacy Policy</p>
                            <p className="text-xs">Privacy Policy</p>
                        </div>
                    </ListItem>
                    <Divider light />
                </List>
            </>
        )
    } else {
        // Is Tenant
        return (
            <>
                <div className="relative block">
                    <Avatar
                        alt="?"
                        src="public/images/no-profile-image.png"
                        className="!w-28 !h-28 !w-44 !h-44 mx-auto"
                    />
                    <img
                        src="public/images/hone-h-logo.png"
                        className="absolute bottom-0 right-28 w-14"
                    />
                </div>
                <p className="text-black mt-4 block mb-5"><strong>Alexander Thompson</strong></p>

                <Divider />
                <List sx={style} component="nav" aria-label="mailbox folders">
                    <ListItem button>
                        <div className="rounded-full bg-orange-500 w-10 h-10 mr-5">
                            <FavoriteIcon className="text-white relative left-2 top-2 text-xs" />
                        </div>
                        <div>
                            <p className="font-bold text-sm">Liked</p>
                            <p className="text-xs">4 Properties</p>
                        </div>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Preferences</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Edit Preferences</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Profile Information</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Edit Name, Age, Description, etc...</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Account Settings</p>
                            <ChevronRightIcon className="absolute right-5 top-4" />
                            <p className="text-xs">Manage your Account</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">About Us</p>
                            <p className="text-xs">About Hone</p>
                        </div>
                    </ListItem>
                    <Divider light />
                    <ListItem button>
                        <div>
                            <p className="text-sm">Privacy Policy</p>
                            <p className="text-xs">Privacy Policy</p>
                        </div>
                    </ListItem>
                    <Divider light />
                </List>
            </>
        )
    }
}