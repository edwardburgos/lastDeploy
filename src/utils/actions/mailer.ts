import config from '../../lib/config'
import transporter from '../../transporter/transporter'
async function mail (to: string, subject: string, text: string, from?: string) {
    const mailOptions = {
        to: to,
        subject: subject,
        text: text,
        from: from || config.gmail_user
    }
    
    const mail = await transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err)
            return err
        } else {
            return data
        }
    })
    
}
export default mail