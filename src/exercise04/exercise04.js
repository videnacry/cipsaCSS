import './exercise04.css'

export const Exercise04 = () => {

    return(
        <table className="table-bordered border-2">
            <caption className='caption-side-bottom'>TABLA 1</caption>
            <tr>
                <td className='border-2'>c-1 f-1</td>
                <td>c-2 f-1</td>
                <td>c-3 f-1</td>
            </tr>
            <tr>
                <td>c-1 f-2</td>
                <td>c-2 f-2</td>
                <td>c-3 f-2</td>
            </tr>
        </table>
    )
}