import { FC } from 'react';
import {  useNavigate } from 'react-router-dom';
interface Props { }

const AccountModal: FC<Props> = () => {
	const navigate = useNavigate();

    return (
        <div className='account-modal'>
            <p>Settings</p>
            <p>Users</p>

            	<div className="modal-divider" />
            <div className="modal-logout" onClick={() => navigate('/')}>
                <div>
                    <img src="/images/icons/logout-icon.svg" alt="logout icon" />
                    <span>Logout</span>
                </div>
            </div>
        </div>
    );
};

export default AccountModal;