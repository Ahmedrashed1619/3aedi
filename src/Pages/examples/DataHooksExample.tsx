import { useFetch } from '@/hooks/useFetch';
import { useMutation } from '@/hooks/useMutation';
import END_POINTS from '@/services/constants';

interface Post {
  id: number;
  title: string;
}

const DataHooksExample = () => {
  // 1. Example for useFetch (GET request)
  const { data: posts, isLoading, isError } = useFetch<Post[]>(
    END_POINTS.POSTS_URL,
    { _limit: 7 }
  );

  // 2. Example for useMutation (POST, PUT, DELETE requests)
  const { post, remove, isMutating } = useMutation();

  const handleAddPost = async () => {
    const newPost = {
      title: `New Post at ${new Date().toLocaleTimeString()}`,
      userId: 1,
    };

    await post(END_POINTS.POSTS_URL, newPost, {
      successMessage: 'Post added successfully!',
    //   revalidateKey: [END_POINTS.POSTS_URL, { _limit: 7 }],
    });
  };

  const handleDeletePost = async (postId: number) => {
    const deleteUrl = `${END_POINTS.POSTS_URL}/${postId}`;
    
    await remove(deleteUrl, {
      successMessage: 'Post deleted successfully!',
      errorMessage: 'Could not delete the post. Please try again.',
    //   revalidateKey: [END_POINTS.POSTS_URL, { _limit: 7 }],
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load posts.</div>;

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif', backgroundColor: '#fff', margin: '2rem', borderRadius: '8px' }}>
      <h1 style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>Data Hooks Example</h1>

      <button
        onClick={handleAddPost}
        disabled={isMutating}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '1rem',
          opacity: isMutating ? 0.6 : 1,
        }}
      >
        {isMutating ? 'Processing...' : 'Add New Post'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {posts?.map((post) => (
          <li
            key={post.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem',
              border: '1px solid #ddd',
              borderRadius: '4px',
              marginBottom: '0.5rem',
            }}
          >
            <span>{post.id}: {post.title}</span>
            <button
              onClick={() => handleDeletePost(post.id)}
              disabled={isMutating}
              style={{
                padding: '0.25rem 0.5rem',
                backgroundColor: '#dc3545',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                opacity: isMutating ? 0.6 : 1,
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataHooksExample;