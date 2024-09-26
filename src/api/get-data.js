export const getData = async () => {
    const data = await fetch(
        'http://localhost:1337/api/company-website?populate[heroSection][populate][image][fields][0]=url&populate[heroSection][populate][image][fields][1]=alternativeText&populate[heroSection][populate][link]=*&populate[jobRoleSection][populate][card][populate][cardHeader][populate][image][fields][0]=url&populate[jobRoleSection][populate][card][populate][cardHeader][populate][image][fields][1]=alternativeText&populate[jobRoleSection][populate][card][populate][badge]=*&populate[benefitSection][populate][benefitCard][populate][image][fields][0]=url&populate[benefitSection][populate][benefitCard][populate][image][fields][1]=alternativeText&populate[benefitSection][populate][stepCard][populate][image][fields][0]=url&populate[benefitSection][populate][stepCard][populate][image][fields][1]=alternativeText&populate[contactSection][populate][link]=*',
        {
            method: 'GET',
        }
    )

    return await data.json()
}
