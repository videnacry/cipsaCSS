import './exercise05.css'

const titles = ['VENTAS', 'ENERO', 'FEBRERO', 'MARZO']


const tableClass = 'border-black children-th-bg-blue children-th-left children-td-right'
const fontClass = 'font-size-09 font-family-arial'

export const Exercise05 = () => {
    return(
        <table className={tableClass}>
            <caption>VENTAS 2008</caption>
            <thead className='children-th-txt-blue'>
                <tr>
                    {titles.map(title => <th className={fontClass}>{title}</th>)}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>BIZKAIA</th>
                    <td>10.250€</td>
                    <td>15.560€</td>
                    <td>10.360€</td>
                </tr>
                <tr>
                    <th>GUIPUZKOA</th>
                    <td>12.360€</td>
                    <td>8.950€</td>
                    <td>18.500€</td>
                </tr>
                <tr>
                    <th>ARABA</th>
                    <td>9.635€</td>
                    <td>6.580€</td>
                    <td>11.250€</td>
                </tr>
            </tbody>
        </table>
    )
}