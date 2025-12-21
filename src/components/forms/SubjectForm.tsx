"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Image from "next/image";

const schema = z.object({
    username: z
        .string()
        .min(3, { message: 'Username must be at least 3 characters long!' })
        .max(20, { message: 'Username must be at most 20 characters long!' }),
    email: z.string().email({ message: "Invalid emaild address!" }),
    password: z.string().min(8, { message: "Password must be at least 8 characters long!" }),

    subjectName: z.string().min(1, { message: "Subject Name is required!" }),
    code: z.string().min(1, { message: "Code is required!" }),
    teachers: z.array(z.string()).max(5, { message: "Teachers' Name(s) is required!" }),
});

type Inputs = z.infer<typeof schema>;

const SubjectForm = ({
    type,
    data
}: {
    type: "create" | "update";
    data?: any
}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit = handleSubmit(data => {
        console.log(data);
    })

    return (
        <form className="flex flex-col gap-8" onSubmit={onSubmit}>
            <h1 className="text-xl semi-bold">Create a New Teacher</h1>
            <span className="text-xs text-gray-400 font-medium">
                Authentication Information
            </span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Username"
                    name="username"
                    defaultValue={data?.username}
                    register={register}
                    error={errors?.username}
                />
                <InputField
                    label="Email"
                    name="email"
                    type="email"
                    defaultValue={data?.email}
                    register={register}
                    error={errors?.email}
                />
                <InputField
                    label="Password"
                    name="password"
                    type="password"
                    defaultValue={data?.password}
                    register={register}
                    error={errors?.password}
                />
            </div>
            <span className="text-xs text-gray-400 font-medium">
                Subject Name Information
            </span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Subject Name"
                    name="subjectName"
                    defaultValue={data?.subjectName}
                    register={register}
                    error={errors?.subjectName}
                />
                <InputField
                    label="Code"
                    name="code"
                    defaultValue={data?.code}
                    register={register}
                    error={errors?.code}
                />
                <InputField
                    label="Teachers"
                    name="teachers"
                    defaultValue={data?.teachers}
                    register={register}
                    error={errors.teachers?.root}
                />
            </div>

            <button className="bg-blue-400 text-white p-2 rounded-md">
                {type === "create" ? "Create" : "Update"}
            </button>
        </form>
    )
};

export default SubjectForm
