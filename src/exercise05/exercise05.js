import './exercise05.css'

/**
 * Return months sell if the sells year matches the param year
 * @param {object} sell 
 * @param {int} year 
 */
const monthsSell = (sell, year) => {
    if (sell.year == year) {
        return sell.countries.map(country => {
            return(
            <tr>
                <th className={thClass}>{country.name}</th>
                {months.map(month => (
                    <td>{country.months[month] + ' ' + coins[country.coin]}</td>
                ))}
            </tr>
            )
        })
    }
}

const months = ['ENERO', 'FEBRERO', 'MARZO']
const coins = {
    euro: '€'
}
const sells = [
    {
        year: 2008,
        countries: [
            {
                name: 'BIZKAIA',
                months: {
                    ENERO: 10.250,
                    FEBRERO: 15.560,
                    MARZO: 10.360
                },
                coin: 'euro'
            },
            {
                name: 'GUIPUZKOA',
                months: {
                    ENERO: 12.360,
                    FEBRERO: 8.950,
                    MARZO: 18.500
                },
                coin: 'euro'
            },
            {
                name: 'ARABA',
                months: {
                    ENERO: 9.635,
                    FEBRERO: 6.580,
                    MARZO: 11.250
                },
                coin: 'euro'
            }
        ]
    }
]

const tableClass = 'm-auto border-black children-th-bg-blue children-th-left children-td-right'
const fontClass = 'font-size-09 font-family-arial'
const thClass = 'font-weight-bold width-190 ' + fontClass
const headers = [
    {
        name: 'VENTAS',
        class: 'width-190 ' + fontClass
    },
    {
        name: 'ENERO',
        class: 'width-120 ' + fontClass
    },
    {
        name: 'FEBRERO',
        class: 'width-150 ' + fontClass
    },
    {
        name: 'MARZO',
        class: 'width-120 ' + fontClass
    }
]

export const Exercise05 = () => {
    return(
    <table className={tableClass}>
        <caption>VENTAS 2008</caption>
        <thead className='children-th-txt-blue'>
            <tr>
                {headers.map(header => <th className={header.class}>{header.name}</th>)}
            </tr>
        </thead>
        <tbody>
            {sells.map(sell => monthsSell(sell, 2008))}
        </tbody>
    </table>
    )
}