import React, {Fragment} from 'react';
import {Link} from "react-router-dom";

const UserBioHeader = (props) => {
    const user = props.user;

    const Header = () => (
        <div className={''}>
            <Link to={'/'}>
                <div className={'btn btn-light'}>Back to Search</div>
            </Link>
            <span className={'a btn ml-3'} disabled>Hireable</span>
            <span></span>
        </div>
    );

    const FollowingBar = () => (
        <div className={'border rounded p-3 mt-3 text-center'}>
            <span className={'ml-3 mr-3 p-1 rounded bg-secondary'}>Followers: {user.followers}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-warning'}>Following: {user.following}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-success'}>Public Repos: {user.public_repos}</span>
            <span className={'ml-3 mr-3 p-1 rounded bg-danger'}>Public Gists: {user.public_gists}</span>
        </div>
    )

    const BioProfile = () => (
        <div className={'d-flex border rounded p-3 mt-3'}>
            <div className={'col-sm-6 text-center'}>
                <img className={'img-fluid rounded-lg'} src={user.avatar_url} alt={user.name} style={{width: '10rem'}}/>
                <div className={'h5 mt-3'}>{user.name}</div>
                <div>Location: {user.location}</div>
            </div>
            <div className={'col-sm-6'}>
                <div className={'h5'}>Bio</div>
                <p>{user.bio}</p>
                <a href={user.html_url} className={'btn btn-secondary mt-3 mb-3'} target="_blank">Visit Github Profile</a>
                <div>Blog: {user.blog}</div>
                <div>Company: {user.company}</div>
            </div>
        </div>
    )

    return (
        <Fragment>
            <Header/>
            <BioProfile/>
            <FollowingBar/>
        </Fragment>
    )
}

export default UserBioHeader;