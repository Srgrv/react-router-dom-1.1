import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

//extra-reducers
import { getPostAsync } from "../store/slices/sliceTitle";

const TitlePage = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostAsync(id));
  }, [dispatch, id]);

  const post = useSelector((state) => state.titlePage.post);

  return (
    <div>
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </div>
  );
};

export default TitlePage;

//оформить переход с BLogPage на TitlePage нажав на заголовок, чтобы в Title были и заголовок и текск
