// import { SubmitHandler, useForm } from "react-hook-form";
// import * as S from "./elements";
// import * as yup from "yup";
// import { useYupValidationResolver } from "utils";
// import { RefObject, useState } from "react";
// import axios, { AxiosError, AxiosResponse } from "axios";
// import type { ApiResponseBase, HTMLFormProps } from "types";

// type ContactResponse = ApiResponseBase<{}>;

// export const contactSchema = yup.object({
//   name: yup.string().required("The field is required."),
//   email: yup.string().email("Incorrect email.").required("The field is required."),
//   subject: yup.string().required("The field is required."),
//   message: yup.string().required("The field is required.")
// });

// export interface ContactFormValues {
//   name: string;
//   email: string;
//   subject: string;
//   message: string;
// }

// export type ContactFormProps = HTMLFormProps & {
//   ref?: RefObject<HTMLFormElement>;
// };

// export const ContactForm = ({ ...props }: ContactFormProps) => {
//   const [successfulSubmit, setSuccessfulSubmit] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const resolver = useYupValidationResolver(contactSchema);
//   const form = useForm<ContactFormValues>({
//     resolver,
//     defaultValues: {
//       name: "",
//       email: "",
//       subject: "",
//       message: ""
//     }
//   });

//   const { control, handleSubmit } = form;

//   const onSubmit: SubmitHandler<ContactFormValues> = async data => {
//     try {
//       await axios.post<ContactResponse, AxiosResponse<ContactResponse>>("/api/contact", data);

//       setSuccessfulSubmit(true);
//     } catch (error) {
//       const axiosError = error as AxiosError;
//       setError(axiosError.response?.data.message);
//       console.warn(axiosError.response?.data.message);
//     }
//   };

//   return (
//     <S.Form {...props} onSubmit={handleSubmit(onSubmit)}>
//       {successfulSubmit ? (
//         <S.Title>Thank you, we'll get back to you as soon as possible.</S.Title>
//       ) : (
//         <>
//           <S.HeaderText>e-mail form</S.HeaderText>
//           <S.Title>Contact Us</S.Title>
//           <S.Description>
//             Quickly maximize timely deliverables for real-time maintain schemas.
//           </S.Description>
//           <S.FormInput label={"Your Name (required)"} control={control} name='name' />
//           <S.FormInput label={"Your Email (required)"} control={control} name='email' />
//           <S.FormInput label={"Subject"} control={control} name='subject' />
//           <S.FormTextArea
//             label={"Your Message"}
//             control={control}
//             name='message'
//             rows={10}
//             cols={40}
//           />
//           <S.Actions>
//             <S.Button variant='primary' type='submit'>
//               Send
//             </S.Button>
//             {error && <S.FormError>{error}</S.FormError>}
//           </S.Actions>
//         </>
//       )}
//     </S.Form>
//   );
// };

export {};
