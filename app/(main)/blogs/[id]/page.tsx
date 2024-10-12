"use client";
import {
  createNewComment,
  getAllBlogs,
  getBlogById,
} from "@/actions/blogAction";
import { createComment, getAllComments } from "@/actions/commentAction";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import Wrapper from "@/components/Wrapper";
import { useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

type Props = {};

const Page = ({ params }: { params: { id: string } }) => {
  const [blogDetail, setBlogDetail] = useState<any | null>(null);
  const [blogs, setBlogs] = useState<any | null>(null);
  const [comments, setComments] = useState<any | null>(null);
  const [content, setContent] = useState("");
  const getCurrentUser = useUser();
  const user = getCurrentUser.user;
  const formRef = useRef<HTMLTextAreaElement | null>(null);

  const getBlogs = async () => {
    const blog = await getBlogById(params.id);

    if (blog) setBlogDetail(blog);

    const blogs = await getAllBlogs();

    if (blogs) setBlogs(blogs);

    if (blog) {
      const comments = await getAllComments(blog?.id);
      if (comments) setComments(comments);
    }
  };

  const handleSubmitComment = async () => {
    if (!content || content === "") return;
    const req = await createComment(content, blogDetail.id);

    if (req) {
      setContent("");
      if (formRef.current) {
        formRef.current.value = "";
      }
      getBlogs();
      toast.success("Berhasil menambah komentar!");
    } else {
      toast.error("Gagal menambahkan komentar!");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);
  return (
    <Wrapper>
      {blogDetail && (
        <div className="mt-40">
          <div className="w-full h-[400px] lg:h-[600px]">
            <Image
              src={blogDetail.image}
              alt="banner"
              width={1800}
              height={600}
              className="object-cover rounded-md w-full h-full object-top border border-input"
            />
          </div>
          <div className="mt-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="col-span-4 lg:order-1 order-2 border border-input rounded-md p-4">
                <div className="flex justify-between">
                  <h2 className="text-xl font-bold">
                    Berita <span className="text-primary">Lingkungan</span>
                  </h2>
                  <Link href={"/blogs"}>Lainnya</Link>
                </div>
                <div className="mt-10 flex flex-col gap-4">
                  {blogs?.map((blog: any) => (
                    <Link
                      key={blog.id}
                      href={"/blogs"}
                      className="group hover:-translate-y-4 duration-200 transition-all ease-in"
                    >
                      <Card className="group-hover:border-primary">
                        <CardHeader>
                          <CardTitle>{blog.title}</CardTitle>
                          <CardDescription>
                            <div
                              dangerouslySetInnerHTML={{
                                __html: blog.description,
                              }}
                            />
                          </CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col-span-8 lg:order-2 order-1">
                <div className="border border-input rounded-md p-4">
                  <p className="text-xl font-bold">{blogDetail.title}</p>
                  <p className="text-muted-foreground text-xs">
                    20 Agustus 2024
                  </p>
                  <div
                    className="mt-3"
                    dangerouslySetInnerHTML={{ __html: blogDetail.description }}
                  />
                </div>

                <div className="mt-10 border border-input rounded-md p-4">
                  <p className="text-xl font-bold">
                    Tinggalkan <span className="text-primary">Komentar</span>
                  </p>
                  <div className="mt-10">
                    <div className="border border-muted rounded-md min-h-[500px] overflow-auto p-4">
                      <div className="flex flex-col gap-4">
                        {comments?.map((comment: any) => (
                          <>
                            {comment.user_id === user ? (
                              <div
                                key={comment.id}
                                className="flex justify-between w-full gap-4"
                              >
                                <Avatar>
                                  <AvatarImage src={comment.user.photo_url} />
                                  <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                                <div className="border border-muted rounded-md p-4 w-full">
                                  {comment.content}
                                </div>
                              </div>
                            ) : (
                              <div
                                key={comment.id}
                                className="flex justify-between w-full gap-4"
                              >
                                <div className="border border-primary rounded-md p-4 w-full">
                                  {comment.content}
                                </div>
                                <Avatar>
                                  <AvatarImage src={comment.user.photo_url} />
                                  <AvatarFallback>IN</AvatarFallback>
                                </Avatar>
                              </div>
                            )}
                          </>
                        ))}
                      </div>
                    </div>
                    <div className="mt-5">
                      <Textarea
                        ref={formRef}
                        placeholder="ketikan komentar..."
                        onChange={(e) => setContent(e.target.value)}
                      />
                      <Button
                        variant={"outline"}
                        className="mt-5"
                        onClick={handleSubmitComment}
                      >
                        Kirim
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Wrapper>
  );
};

export default Page;
