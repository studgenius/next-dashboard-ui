"use client";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import InputField from "../InputField";
import Image from "next/image";

const stringArray = z.array(z.string());

const schema = z.object({
    name: z.string().min(5, { message: "Invalid subject name!" }),
    code: z.string().min(8, { message: "Required!" }),
    teachers: z
        .array(z.string())
        .min(2) // must contain 2 or more items
        .max(5) // must contain 5 or fewer items
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
            <h1 className="text-xl semi-bold">Create a Subject</h1>
            <span className="text-xs text-gray-400 font-medium">
                Subject Information
            </span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField
                    label="Subject Name"
                    name="name"
                    defaultValue={data?.name}
                    register={register}
                    error={errors?.name}
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
