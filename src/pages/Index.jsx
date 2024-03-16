import { useState } from "react";
import { Box, Heading, Text, VStack, HStack, Spacer, Container, Image, Link, Button } from "@chakra-ui/react";
import { FaTwitter, FaGithub, FaEnvelope } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "My Journey into Web Development",
    excerpt: "Learn about my transition from a different career into the world of web development and the challenges I faced along the way.",
    imageUrl: "https://images.unsplash.com/photo-1593720213428-28a5b9e94613?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTA1ODc3MDB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Building a Personal Blog with SvelteKit and TypeScript",
    excerpt: "In this post, I share my experience building a personal blog using SvelteKit and TypeScript, and the benefits of using these technologies.",
    imageUrl: "https://images.unsplash.com/photo-1536687400352-d7fe4e08bc23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdmVsdGUlMjBraXQlMjB0eXBlc2NyaXB0fGVufDB8fHx8MTcxMDU4NzcwMHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Embracing the IndieWeb Movement",
    excerpt: "Discover the IndieWeb movement and how it empowers individuals to take control of their online presence and data.",
    imageUrl: "https://placehold.co/600x400",
  },
];

const Index = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        <HStack>
          <Heading as="h1" size="xl">
            My Personal Blog
          </Heading>
          <Spacer />
          <HStack spacing={4}>
            <Link href="https://twitter.com/yourusername" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://github.com/yourusername" isExternal>
              <FaGithub size={24} />
            </Link>
            <Link href="mailto:youremail@example.com" isExternal>
              <FaEnvelope size={24} />
            </Link>
          </HStack>
        </HStack>

        {selectedPost ? (
          <VStack align="stretch" spacing={4}>
            <Heading as="h2" size="lg">
              {selectedPost.title}
            </Heading>
            <Image src={selectedPost.imageUrl} alt={selectedPost.title} />
            <Text>{selectedPost.excerpt}</Text>
            <Button onClick={() => setSelectedPost(null)}>Back to Posts</Button>
          </VStack>
        ) : (
          posts.map((post) => (
            <Box key={post.id} p={4} borderWidth={1} borderRadius="md" _hover={{ bg: "gray.100", cursor: "pointer" }} onClick={() => setSelectedPost(post)}>
              <HStack align="start" spacing={4}>
                <Image src={post.imageUrl} alt={post.title} width={100} height={100} objectFit="cover" borderRadius="md" />
                <VStack align="start" spacing={2}>
                  <Heading as="h2" size="md">
                    {post.title}
                  </Heading>
                  <Text>{post.excerpt}</Text>
                </VStack>
              </HStack>
            </Box>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Index;
