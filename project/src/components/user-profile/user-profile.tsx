import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { logoutAction } from '../../store/api-actions';
import { getAuthCheckedStatus, getUserData } from '../../store/user-process/user-process.selectors';

function UserProfile():JSX.Element {
  const authorizationStatus = useAppSelector(getAuthCheckedStatus);
  const userData = useAppSelector(getUserData);
  const email = userData ? userData.email : null;
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {
            !authorizationStatus ?
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className="header__login">Sign in</span>
              </Link>
              :
              <div className="header__nav-profile">
                <div className="header__avatar-wrapper user__avatar-wrapper" />
                <span className="header__user-name user__name">{email}</span>
              </div>
          }
        </li>
        {
          authorizationStatus ?
            <li className="header__nav-item">
              <Link
                className="header__nav-link"
                to={AppRoute.Root}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                <span className="header__signout">Sign out</span>
              </Link>
            </li> : ''
        }


      </ul>
    </nav>
  );
}

export default UserProfile;
