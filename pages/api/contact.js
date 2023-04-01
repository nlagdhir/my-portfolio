import nodemailer from "nodemailer";
import logo from '../../public/img/logo/logo.jpg'
function validateFormData(name, email, phone, subject, message) {
  let errors = {};

  if (!name || name === "") {
    errors.name = "Name is required.";
  }
  if (!email || !email.includes("@")) {
    errors.email = "Email is required.";
  }
  if (!phone) {
    errors.phone = "Invalid Phone.";
  }
  if (!subject) {
    errors.subject = "Subject is required.";
  }
  if (!message) {
    errors.message = "Message is required.";
  }

  return errors;
}

const handler = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, phone, subject, message } = req.body;

    const errors = validateFormData(name, email, phone, subject, message);

    if (Object.keys(errors).length === 0) {
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.Email,
          pass: process.env.Password,
        },
      });

      let mailOptions = {
        from: process.env.Email,
        to: process.env.Email, 
        subject: subject,
        html: `<table cellspacing="0" style="border: 2px solid #282828; width: 900px; margin: 0 auto;border-radius: 6px;"> 
        <tr>
            <td align="center" valign="top" id="bodyCell" style="padding: 0px;">      
                <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                    <tr>
                        <td align="center" valign="top" id="templateHeader" data-template-container style="background-color:#ffffff; padding: 6px 0px;">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="background-color:#ffffff;">
                             <tr>
                                <td valign="top" class="headerContainer">
                                   <table class="mcnImageBlock" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody class="mcnImageBlockOuter">
                                         <tr>
                                            <td style="padding:0px 9px" class="mcnImageBlockInner" valign="top">
                                               <table class="mcnImageContentContainer" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                  <tbody>
                                                     <tr>
                                                        <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;" valign="top">
                                                          <img style="height: 80px" src="https://i.ibb.co/nMCqmgt/logo.jpg"></img>
                                                        </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                         </tr>
                                      </tbody>
                                   </table>
                                </td>
                             </tr>
                          </table>        
                        </td>
                    </tr>
                    <tr align="center" style="background-color:#000000;">
                      <td style="color: #ffffff;padding: 8px 0px;font-weight: 700;font-size: 16px;">User Details:</td>
                    </tr>
                    <tr>
                      <td align="center" valign="top" id="templateBody" data-template-container>
                        <table align="center" border="0" cellpadding="0" cellspacing="0" max-width="100%" class="templateContainer" style="padding-bottom: 0px;width:100%;">
                           <tr>
                              <td valign="top" class="bodyContainer">
                                 <table class="mcnImageBlock" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                    <tbody class="mcnImageBlockOuter">
                                       <tr>
                                          <td style="padding:20px 0;background:#fff; border-radius: 6px;" class="mcnImageBlockInner" valign="top">
                                             <table class="mcnImageContentContainer" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                <tbody>
                                                   
                                                    <!-- <tr>
                                                      <td colspan="2" style="text-align: center; font-weight: bold; height: 50px;">Customer Info:</td>
                                                    </tr> -->
                                                    <tr>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">Name:</td>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">${name}</td>
                                                    </tr>
                               
                                                    <tr>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">Email:</td>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">${email}</td>
                                                    </tr>
                                                    <tr>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">Phone:</td>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">${phone}</td>
                                                    </tr>
                                                                    <tr>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">Message:</td>
                                                      <td style="border:1px solid #ede9e9 ; padding:5px;font-size: 13px;font-weight: 600;color: #282828;">${message}</td>
                                                    </tr>
                                                    
                                                    
                                                </tbody>
                                             </table>
                                          </td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </td>
                           </tr>
                        </table>
                      </td>
                    </tr>
                </table>         
            </td>
        </tr> 
      </table> `,
      };

      let mailOptionsForUser = {
        from: "tarequl.islalm@gmail.com",
        to: email,
        subject: "Thanks",
        html: `  <table cellspacing="0" style="border: 2px solid #282828; width: 900px; margin: 0 auto;border-radius: 6px;"> 
        <tr>
            <td align="center" valign="top" id="bodyCell" style="padding: 0px;">      
                <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                    <tr>
                        <td align="center" valign="top" id="templateHeader" data-template-container style="background-color:#ffffff; padding: 6px 0px;">
                          <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="background-color:#ffffff;">
                             <tr>
                                <td valign="top" class="headerContainer">
                                   <table class="mcnImageBlock" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0">
                                      <tbody class="mcnImageBlockOuter">
                                         <tr>
                                            <td style="padding:0px 9px" class="mcnImageBlockInner" valign="top">
                                               <table class="mcnImageContentContainer" style="min-width:100%;" width="100%" cellspacing="0" cellpadding="0" border="0" align="left">
                                                  <tbody>
                                                     <tr>
                                                        
                                                        <td class="mcnImageContent" style="padding-right: 9px; padding-left: 9px; padding-top: 0; padding-bottom: 0; text-align:center;" valign="top">
                                                          <img style="height: 80px" src="https://i.ibb.co/nMCqmgt/logo.jpg"></img>
                                                        </td>
                                                     </tr>
                                                  </tbody>
                                               </table>
                                            </td>
                                         </tr>
                                      </tbody> 
                                   </table>
                                </td>
                             </tr>
                          </table>        
                        </td>
                    </tr>
                    <tr align="center" style="background-color:hsl(0, 100%, 81%); "> 
                    <td style="color:#222;padding: 8px 0px; border:1px solid #ede9e9; font-weight: 600;font-size: 14px; padding: 20px;">
                      <p style="margin:0px;">Thank you for your message. <br/>Our team will get back to you soon.</p>
                    </td>
                  </tr>
                </table>         
            </td>
        </tr> 
      </table> `,
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          return res.status(200).json({
            status: false,
            message: "Something went wrong!, Please try again later!",
            data: error,
          });
        } else {
          transporter.sendMail(
            mailOptionsForUser,
            function (errorUser, infoUser) {
              if (errorUser) {
                return res.status(200).json({
                  status: false,
                  message: "Something went wrong!, Please try again later!",
                  data: errorUser,
                });
              } else {
                return res.status(200).json({
                  status: true,
                  message: "Email Sent, We will get back to you soon!",
                  data: info,
                });
              }
            }
          );
        }
      });
    } else {
      // Form data is invalid, send error messages to client
      if (errors) {
        return res.status(200).json({ status: false, errors: errors });
      }
    }
    // Return null if no errors
    // if (
    //   !email ||
    //   !email.includes("@") ||
    //   !name ||
    //   name.trim() === "" ||
    //   !message ||
    //   message.trim() === "" ||
    //   !phone ||
    //   phone.trim() === "" ||
    //   !subject ||
    //   subject.trim() === ""
    // ) {
    //   let errorObj={
    //     name:'Name should not be empty!',
    //     phone:'Invalid Phone',
    //     subject:'Subject should not be empty!',
    //     email:'Invalid email address',
    //     message:"Invalid Message, Type something more!"
    //   }
    //   return res.status(422).json(errorObj);;
    // }
  }
};

export default handler;
