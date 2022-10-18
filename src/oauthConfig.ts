
export const getAuthorizeHref = (): string => {
    return "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=22BN2K&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fdashboard&scope=activity%20heartrate%20location%20nutrition%20profile%20settings%20sleep%20social%20weight%20oxygen_saturation%20respiratory_rate%20temperature&expires_in=604800"
}
