import React from 'react'

const player = ({ name, team, nationality, jerseyNumber, age, imageURL }) => {
  return (
    <div>
        <div className='df text-center justify-center m-5'>
            <div class="card bg-warning border border-5 border-secondary">
                <img src={imageURL} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text">
                         Team: {team}<br />
                         Nationality: {nationality}<br />
                         Jersey Number: {jerseyNumber}<br />
                         Age: {age}
                    </p>
                    <a href="#" class="btn btn-primary">View Stats</a>
                </div>
            </div>
        </div>    
    </div>
  )
}

export default player
