import React from 'react'
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./project-preview.module.css"

export default ({project}) => {
	return (
		<div>
			<Link to={"/project/" + project.slug}>
				<Img className={styles.projectPreviewImage} fluid={project.coverImage.fluid} />
			</Link>
			<Link to={"/project/" + project.slug}>
				<h6>{project.name}</h6>
			</Link>
			<p>{project.shortDescription.shortDescription}</p>
		</div>
	)
}